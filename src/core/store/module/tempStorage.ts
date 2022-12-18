import { StateStorage } from "zustand/middleware"

let temp = {}
const getTemp = (name: string) => {
	return temp[name]
}
const setTemp = (name: string, value: any) => {
	temp = { ...temp, ...{[name]:value}}
}
const delTemp = (name: string) => {
	delete temp[name]
}

const TempStorage: StateStorage = {
	getItem: async (name: string): Promise<string | null> => {
		return (await getTemp(name)) || null
	},
	setItem: async (name: string, value: string): Promise<void> => {
		await setTemp(name, value)
		// console.log(temp)
	},
	removeItem: async (name: string): Promise<void> => {
		await delTemp(name)
		// console.log(temp)

	},
}
export default TempStorage