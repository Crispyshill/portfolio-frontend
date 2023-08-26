export default function(){
	return(
		<div className="email-form-container">
			<span>Email Form: </span>
			<form className="email-form">
				<label for="email">Email</label>
				<input id="email" type="email"/>
				<label for="email-subject">Subject:</label>
				<input id="email-subject" type="text"/>
				<label for="email-body">Body:</label>
				<textarea id="email-body"/>
			</form>
		</div>
);
}
