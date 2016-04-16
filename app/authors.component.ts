import {Component} from 'angular2/core'
import {AuthorService} from './authors.service'

@Component({
	selector: 'authors',
	template: `<h2>Authors</h2>
			{{title}}
			<ul>
				<li *ngFor="#author of authors">
				{{author}}
				</li>
			</ul>
			`,
			providers: [AuthorService]
})

export class AuthorsComponent {
	title = "Title for the authors page";
	authors;

	constructor(AuthorService: AuthorService){
		this.authors = AuthorService.getAuthors();
	}
}
