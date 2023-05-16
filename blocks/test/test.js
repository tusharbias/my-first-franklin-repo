import { createOptimizedPicture } from '../../scripts/lib-franklin.js';

export default function decorate(block) {
  /* change to ul, li */
  const ul = document.createElement('ul');
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.innerHTML = row.innerHTML;
	console.log('Tushar -->' + row.innerHTML);
    [...li.children].forEach((div) => {
		//console.log('Tushar -->' + row.innerHTML);
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'test-card-image';
      else if (div.querySelector('h2')) div.className='test-heading'; 
	  else div.className = 'test-card-body-content';
    });
    ul.append(li);
  });
  
  
  
  
  ul.querySelectorAll('img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  block.textContent = '';
  block.append(ul);
}
