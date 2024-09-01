import { readFileSync } from "fs";
import { parse } from "csv/sync";

const options = {
    columns: true,
    skip_empty_lines: true,
};

export const activities = parse(readFileSync("export/activities.csv", "utf-8"), options);

export const user = parse(readFileSync("export/profile.csv", "utf-8"), options)[0];

export const followers = parse(readFileSync("export/followers.csv", "utf-8"), options);

export const following = parse(readFileSync("export/following.csv", "utf-8"), options);
