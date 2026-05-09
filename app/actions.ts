// app/actions.ts
'use server';

import { getAllPublicIds } from "./components/data";

export async function fetchPublicIds() {
    return await getAllPublicIds();
}