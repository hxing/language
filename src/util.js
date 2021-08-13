export const langMap = {
	switch: {
			en: "Switch Language",
			cn: "切换语言"
	},
	start: {
			en: "Start",
			cn: "开始"
	}
};

export const getText = key => langMap[key][localStorage["language"]];