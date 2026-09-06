"use server";

import { generateWords } from "./generateWords";
import {
    consumeGeminiGeneration,
    getGeminiUsage,
} from "./usage";

export async function getGeminiUsageAction() {
    return getGeminiUsage();
}

export async function generateWordsAction(theme: string) {
    if (!theme.trim()) {
        throw new Error("Theme is required");
    }

    if (theme.length > 100) {
        throw new Error("Theme is too long");
    }

    const usage = await consumeGeminiGeneration();
    const words = await generateWords(theme);

    return {
        words,
        usage,
    };
}
