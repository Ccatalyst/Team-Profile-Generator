const generateTeam = (team) => {
	function generateEmployeeCard(employee) {
		return `
			<div class="card border border-dark col-3 p-0 m-0">
				<div class="top bg-primary ps-3">
					<div class="pt-2 px-4 text-light"><h5>${employee.getName()}</h5></div>
					<div class="py-2 px-4 text-light"><h5>${employee.getRole()}</h5></div>
				</div>
				<div class="bottom bg-light">
					<ul class="list-unstyled p-3">
						<li class="bg-white py-1 border border-secondary justify-content-around">ID: ${employee.getId()}</li>
						<li class="bg-white py-1 border border-secondary justify-content-around">Email: ${employee.getEmail()}</li>
						${
							employee.getRole() === "Manager"
								? `<li class="bg-white py-1 border border-secondary justify-content-around">Office Number: ${employee.getOfficeNumber()}</li>`
								: employee.getRole() === "Engineer"
								? `<li class="bg-white py-1 border border-secondary justify-content-around">Github Account: ${employee.getGithub()}</li>`
								: `<li class="bg-white py-1 border border-secondary justify-content-around">Alma Mater: ${employee.getSchool()}</li>`
						}
					</ul>
				</div>
			</div>
			`;
	}
	const html = [];
	html.push(team.map((employee) => generateEmployeeCard(employee)));
	return html.join("");
};
// export function to generate entire page
module.exports = (team) => {
	return `
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>My Team</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <script src="https://kit.fontawesome.com/c502137733.js"></script>
        </head>
    <body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger">
                <h1 class="text-center text-light">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};
