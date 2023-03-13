export function sumPositive(list: number[]) {
    return list.reduce((prev, curr) => {
        if (curr > 0) {
            return prev + curr
        }

        return prev
    }, 0)
}