export interface CategoryType{
    categoryName : string,
    userId : number
}
export interface DeleteCategoryType{
    id : number
}
export interface UpdateCategoryType{
    id : number,
    categoryName : string
}