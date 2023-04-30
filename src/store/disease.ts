import { writable, type Writable } from "svelte/store";
import type { Disease} from "../types";



// export const date: Writable<SelectedFoodItem> = writable({
//   Protein: [],
//   "Healthy Fats": [],
//   Fruits: [],
//   Vegetables: [],
// });

interface selectedItems {
    // age: string;
    // height: string;
    // weight: string;
    // activity:string;
    // gender:string;
    // veg_nonveg:string;
    disease:Disease[];
}


export const userInfo:Writable<selectedItems> = writable({
    // age: "0",
    // height: "0",
    // weight: "0",
    // activity:"",
    // gender:"",
    // veg_nonveg:"",
    disease:[]
});

