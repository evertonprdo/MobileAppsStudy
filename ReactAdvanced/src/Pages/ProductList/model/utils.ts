export function resumeString(value: string, digits = 73) {
    return value.length > digits ? value.substring(0, digits - 3) + '...' : value
}