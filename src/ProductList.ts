export enum ProductList {
    Sleeves = 'Sleeves',
    TMNTBooster = 'TMNT Booster',
    DiceSet = 'Dice Set',
    DeckBox = 'Deck Box'
}

const productData: Record<ProductList, number[]> = {
    [ProductList.Sleeves]: [1.00, 14, 12],
    [ProductList.TMNTBooster]: [5.00, 21, 15],
    [ProductList.DiceSet]: [3.00, 14, 12],
    [ProductList.DeckBox]: [8.00, 14, 18],
}