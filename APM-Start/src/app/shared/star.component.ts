import {Component, OnChanges,EventEmitter, Input, Output} from '@angular/core';


@Component ({
    selector:'pm-start',
    templateUrl:"./star.component.html",
    styleUrls:['./star.component.css']
})

export class starComponent implements OnChanges{
    @Input() rating: number;

    starWidth: number;
    @Output() ratingClicked:EventEmitter<string> =
    new EventEmitter<string>();


    ngOnChanges():void{
    this.starWidth = this.rating *75 /5;
    }

    onClick():void{
        this.ratingClicked.emit(`the rating ${this.rating} was clicked`);
    }
}