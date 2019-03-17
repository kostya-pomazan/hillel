const selects = document.querySelectorAll('.select');

selects.forEach(select => {
	let options = select.querySelectorAll('.option');
	let optionActive = select.firstElementChild;
	let activeNode = optionActive.cloneNode(true);
	let parent = optionActive.parentElement;

	options.forEach(option => {
		parent.insertBefore(activeNode, options[0]);
		activeNode.classList.add('active');
		option.classList.add('hidden');

		select.addEventListener('click', function (e) {
			let target = e.target;
			let currentText = target.textContent;

			option.classList.toggle('hidden');

			if (!target.classList.contains('option')) return;

			activeNode.textContent = currentText;
		});
	});
});