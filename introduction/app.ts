let userInput: unknown;

function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code}
}