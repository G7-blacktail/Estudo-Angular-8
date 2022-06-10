import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './courses-list.component.html'
})

export class CourseListComponent implements OnInit {
        
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses =  [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: '/assets/image/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: '0',
                description: "blablabla"
            },
            {
                id: 1,
                name: 'Angular: http',
                imageUrl: '/assets/image/http.png',
                price: 45.99,
                code: 'LKL-5698',
                duration: 80,
                rating: 4,
                releaseDate: 'December, 2 , 2022',
                description: "blablabla"
            },
            {
                id: 1,
                name: 'Angular: Usual',
                imageUrl: '/assets/image/forms.png',
                price: 99.99,
                code: 'CKJ-8782',
                duration: 140,
                rating: 6.3,
                releaseDate: 'November, 5 , 2022',
                description: "blablabla"
            }
        ]
    }

}