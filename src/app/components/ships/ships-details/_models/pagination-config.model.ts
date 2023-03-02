export class PaginationConfigModel {
    itemsPerPage: number;
    currentPage: number;
    totalItems: number;


    constructor(items, page, totalItems) {
        this.itemsPerPage = items;
        this.currentPage = page;
        this.totalItems = totalItems;
    }

}