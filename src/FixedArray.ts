export type FixedArray<T, Length extends number, Items extends T[] = []> =
    Items['length'] extends Length
        ? Items
        : FixedArray<T, Length, [...Items, T]>;