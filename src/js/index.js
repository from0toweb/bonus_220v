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
