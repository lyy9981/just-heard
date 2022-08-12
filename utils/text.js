import removeMarkdown from 'remove-markdown'

export const getTruncatedText = (text, wordsLimit) => {
  if (!text) {
    return null
  }

  const words = text.split(' ')

  if (words.length > wordsLimit) {
    return `${words.splice(0, wordsLimit).join(' ')}...`
  }

  return text
}

export const capitalizeFirstLetter = (string) => {
  if (!string) {
    return null
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const removeMarkdownAndUrl = (text) => {
  return removeMarkdown(text).replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')
}

export const addZeroSpaceWidth = (text) => {
  return text.replace(/([a-z0-9])\/([a-z0-9#])/gi, '$1/&#8203;$2')
}
