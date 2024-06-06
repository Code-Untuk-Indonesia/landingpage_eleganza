document.getElementById('floor-select').addEventListener('change', function () {
	var floorImage = document.getElementById('floor')
	floorImage.style.opacity = 0 // Transition effect
	setTimeout(
		function () {
			floorImage.src = this.value
			floorImage.style.opacity = 1
		}.bind(this),
		300
	) // Wait for transition to complete
})

document.getElementById('wall-select').addEventListener('change', function () {
	var wallImage = document.getElementById('wall')
	wallImage.style.opacity = 0 // Transition effect
	setTimeout(
		function () {
			wallImage.src = this.value
			wallImage.style.opacity = 1
		}.bind(this),
		300
	) // Wait for transition to complete
})

document.getElementById('reset-button').addEventListener('click', function () {
	var floorSelect = document.getElementById('floor-select')
	var wallSelect = document.getElementById('wall-select')
	var floorImage = document.getElementById('floor')
	var wallImage = document.getElementById('wall')

	floorSelect.selectedIndex = 0
	wallSelect.selectedIndex = 0

	floorImage.style.opacity = 0
	wallImage.style.opacity = 0

	setTimeout(function () {
		floorImage.src = ''
		wallImage.src = ''
		floorImage.style.opacity = 1
		wallImage.style.opacity = 1
	}, 300)
})
