import PromptSync from "prompt-sync";
import { Musician } from "./musicianIndex.js";
import { Band, createBand } from "./bandIndex.js";
import fs from "fs";
const prompt = PromptSync({ sigint: true })
const musicianInfoData = 'musicianInfo.json';
const bandInfoData = 'bandInfo.json';
//1. Add Musician - 2. Add Band - 3. Remove musician - 4. Remove Band - 5. Add musician to band - 6. remove musician from band
//7. Info about musician - 8. Info about band - 9. Quit