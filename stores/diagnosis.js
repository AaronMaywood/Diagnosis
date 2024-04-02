export const useDiagnosisStore = defineStore('diagnosisStore', {
	state: () => ({
		name: '診断データベース',
		questions: {
			"/q/1": {
				name: 'アジャストアカデミーの訓練の中で得意なカリキュラムは？',
				options: [
					{
						label: 'コーディング',
						value: 'coding',
						goto: '/q/2/coding',
					},
					{
						label: 'デザイン',
						value: 'design',
						goto: '/q/2/design',
					},
					{
						label: 'ディレクション',
						value: 'direction',
						goto: '/q/2/direction',
					},
					{
						label: 'マーケティング',
						value: 'marketing',
						goto: '/q/2/marketing',
					},
					{
						label: 'ライティング',
						value: 'writing',
						goto: '/q/2/writing',
					},
				]
			},
			'/q/2/coding' : {
				name: 'test',
				options: [
					{
						label: 'コーディング',
						value: 'coding',
						goto: '/result/designer',
					},
					{
						label: 'デザイン',
						value: 'design',
						goto: '/q/2/design',
					},
				],
			}
		},
		result: {
			"/result/designer": {
				job: 'Web制作会社',
				text: `向いている理由...`,
			},
		}
	})
});
