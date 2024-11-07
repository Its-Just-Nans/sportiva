import { readFileSync } from "fs";
import { parse } from "csv/sync";
import type { ActivityType } from "./types";

const options = {
    columns: true,
    skip_empty_lines: true,
};

export const activities: ActivityType[] = parse(readFileSync("export/activities.csv", "utf-8"), options);

const getUser = () => {
    const csvUser = parse(readFileSync("export/profile.csv", "utf-8"), options)[0];
    return {
        ...csvUser,
        name: csvUser["First Name"],
        avatar: `https://www.gravatar.com/avatar/${csvUser["Email Address Sha"]}`,
    };
};

export const user = getUser();

export const followers = parse(readFileSync("export/followers.csv", "utf-8"), options);

export const following = parse(readFileSync("export/following.csv", "utf-8"), options);
