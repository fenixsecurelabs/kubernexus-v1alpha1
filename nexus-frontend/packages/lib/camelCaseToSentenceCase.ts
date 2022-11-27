export const cameCaseToSentenceCase = (stringValue: string) => {
    return stringValue.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
}