// parser.js
import { parse } from 'node-html-parser';

const parseHtml = async (filePath) => {
  try {
    const html = await fs.promises.readFile(filePath, 'utf-8');
    return parse(html);
  } catch (error) {
    console.error(`Error parsing HTML file: ${error}`);
    return null;
  }
};

const start = async () => {
  const filePath = 'path/to/your/html/file.html';
  const parsedHtml = await parseHtml(filePath);
  if (!parsedHtml) return;

  const elements = parsedHtml.querySelectorAll('div');
  const elementsArray = Array.from(elements);

  elementsArray.forEach((element) => {
    console.log(element.tagName);
    console.log(element.innerHTML);
  });
};

start();