import  {useState} from "react";

export default function useList(init) {
    const [list, setList] = useState(init);

    return {
        list,
        removeItem(item) {
            const filteredList = list.filter(v => v.name !== item);
            setList(filteredList);
        },
        saveItem(index, newVal) {
            const copyList = [...list]; 
            copyList[index].name = newVal;
            setList(copyList);
        }
    }

};