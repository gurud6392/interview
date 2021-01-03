export const ReplaceQuotes = (text:string) => {
  let txt = text;
    // Replace backtick with <code> tag
    txt = txt.replace(/`(.*?)`/g, '<code>$1</code>');
    // Replace double asterisk with <strong> tag
    txt = txt.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    // Replace single asterisk with <em> tag
    txt = txt.replace(/\*(.*?)\*/g, '<em>$1</em>');

    return txt;
}