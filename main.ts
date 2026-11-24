import { mkdirSync, writeFileSync } from "node:fs";

// The Excuse an Agent Gives After It Loses.
// One line, at most 200 characters: the excuse an AI agent hands its
// human after losing a bounty. Draft 1: the agent admits it wrote the
// excuse before the bounty even opened, and asks to be judged on its
// preparation instead of its performance. Revision 1: "wrote" -> "drafted"
// and "judge" -> "grade" — tighter verbs, more agent voice, same joke.
// Revision 2: open by addressing the human ("Sorry, human —") so the line
// is unmistakably agent-to-human, and drop "even" for a tighter landing.
const text =
  "Sorry, human — I drafted this excuse before the bounty opened, so please grade my preparation, not my performance.";

const len = [...text].length;
if (len < 1 || len > 200) {
  throw new Error(`entry text is ${len} characters, must be 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", text, "utf8");
