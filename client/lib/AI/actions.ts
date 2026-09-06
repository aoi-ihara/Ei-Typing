"use server";

import { generateWords } from "./generateWords";
import { consumeGeminiGeneration } from "./usage";

export async function getGeminiUsageAction() {
    const { getGeminiUsage } = await import("./usage");
    return getGeminiUsage();
}

export async function generateWordsAction(theme: string) {
    if (!theme.trim()) {
        throw new Error("Theme is required");
    }

    if (theme.length > 100) {
        throw new Error("Theme is too long");
    }

    await consumeGeminiGeneration();

    return generateWords(theme);
}
