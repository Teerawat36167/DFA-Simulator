export function tokenize(buffer) {
    const split = new Set(['(', ')', '{', '}', '[', ']', ',', ':', '+', '-', '*', '/', '%', '=', '\n']);
    const DFA_table = {
        "-1": { any: "-1" },
        "0": { " ": "1", any: "5", split: "17", f: "7", '"': "8", "'": "9" },
        "1": { " ": "2", f: "7", any: "5" },
        "2": { " ": "3", f: "7", any: "5" },
        "3": { " ": "4", f: "7", any: "5" },
        "4": { any: "18" },
        "5": { " ": "6", any: "5", split: "17" },
        "6": { " ": "6", any: "18", split: "17" },
        "7": { any: "5", '"': "8", "'": "9" },
        "8": { '"': "16", any: "8" },
        "9": { "'": "11", any: "10" },
        "10": { "'": "16", any: "10" },
        "11": { " ": "16", "'": "12", any: "-1", split: "17" },
        "12": { "'": "13", any: "12" },
        "13": { "'": "14", any: "-1" },
        "14": { "'": "15", any: "-1" },
        "15": { " ": "16", split: "17", any: "-1" },
        "16": { " ": "16", any: "-1", split: "17", '"': "18", "'": "18" },
        "17": { any: "-1" }, // final: consume split as token
        "18": { any: "-1" } // final: not consume split as token
    };
    const finals = ["17", "18"];
    const tokens = [];
    let cursor = 0;
    let all_state_seq = []
    while (cursor < buffer.length) {
        let state = "0";
        let temp = "";
        let state_seq = ['0']
        while (cursor < buffer.length) {
            let ch = buffer[cursor];
            if (split.has(ch)) {
                ch = "split";
            }
            if (!DFA_table[state][ch]) {
                ch = "any";
            }
            state = DFA_table[state][ch];
            state_seq.push(state)
            if (!finals.includes(state)) {
                temp += buffer[cursor];
            } else {
                break;
            }
            cursor++;
        }
        all_state_seq.push(state_seq)
        state_seq = []
        
        if (!finals.includes(state) && state !== "5") {
            throw new Error(`Rejected at state ${state}`);
        }
        if (temp !== "") {
            tokens.push(temp.trim() !== "    " ? temp : "    ");
        }
        if (state === finals[0]) {
            tokens.push(buffer[cursor]);
            cursor++;
        }
    }
    return [all_state_seq,tokens];
};