const axios = require('axios');
const fs = require('fs');
const path = require('path');

const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;
const TOKEN_COST_INPUT = 0.0000005;
const TOKEN_COST_OUTPUT = 0.0000015;
const USD_TO_SGD = 1.35;

const estimateTokens = (text) => Math.ceil(text.split(/\s+/).length * 1.33);

const calculateCost = (inputTokens, outputTokens) => {
    const inputCostUSD = inputTokens * TOKEN_COST_INPUT;
    const outputCostUSD = outputTokens * TOKEN_COST_OUTPUT;
    const totalUSD = inputCostUSD + outputCostUSD;
    const totalSGD = totalUSD * USD_TO_SGD;
    return { totalUSD, totalSGD };
};

async function getRecommendations(prompt) {
    const inputTokens = estimateTokens(prompt);
    const maxOutputTokens = 300;

    // Log BEFORE sending the API call
    console.log(`[OpenRouter] Preparing to send prompt... Estimated input tokens: ${inputTokens}`);

    try {
        const response = await axios.post('https://openrouter.ai/api/v1/chat/completions', {
            model: 'openai/gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: maxOutputTokens,
            temperature: 0.5
        }, {
            headers: {
                'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        const output = response.data.choices[0].message.content;
        const outputTokens = estimateTokens(output);
        const { totalUSD, totalSGD } = calculateCost(inputTokens, outputTokens);

        // ✅ Log AFTER successful response
        console.log(`[OpenRouter] ✅ SUCCESS | Cost: SGD $${totalSGD.toFixed(5)} (USD $${totalUSD.toFixed(5)}) | Input: ${inputTokens}, Output: ${outputTokens}`);

        const logLine = `[${new Date().toLocaleString()}] Input Tokens: ${inputTokens}, Output Tokens: ${outputTokens}, Cost: USD $${totalUSD.toFixed(5)} | SGD $${totalSGD.toFixed(5)}\n`;
        const logPath = path.join(__dirname, '..', 'logs', 'openrouter-usage.log');
        fs.appendFileSync(logPath, logLine);

        return output;
    } catch (error) {
        // ❌ Log API failure
        console.error(`[OpenRouter] ❌ FAILED to call API | Error: ${error.message}`);
        throw new Error('OpenRouter API call failed');
    }
}

module.exports = { getRecommendations };
