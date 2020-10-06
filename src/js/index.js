'use strict';

const accordion = () => {
	const items = document.querySelectorAll('.questions__item');

	[ ...items ].forEach(item => {
		const button = item.querySelector('.questions__heading');

		button.addEventListener('click', e => {
			[ ...items ].forEach(item => {
				if (item.matches('.questions__item--active') && item !== e.target.closest('.questions__item')) {
					item.classList.remove('questions__item--active');
				}
			});

			item.classList.toggle('questions__item--active');
		});
	});
};
accordion();

const tabs = () => {
	const buttons = document.querySelectorAll('.spending__button');
	const contentBlocks = document.querySelectorAll('.spending__line');

	buttons.forEach((item, index) => {
		item.addEventListener('click', () => {
			contentBlocks.forEach((elem, i) => {
				if (index !== i) {
					elem.classList.remove('spending__line--visible');
					buttons[i].classList.remove('button--active');
				} else {
					elem.classList.add('spending__line--visible');
					buttons[i].classList.add('button--active');
				}
			});
		});
	});
};
tabs();
