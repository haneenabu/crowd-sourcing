import { Pipe, PipeTransform } from '@angular/core';
import { Post } from './post.model';

@Pipe({
  name: 'category',
  pure: false
})
export class CategoryPipe implements PipeTransform {

  transform(input: Post[], desiredCategory) {
    var output: Post[] = [];
    //desiredCategory is the same as optionFromMenu
    if(desiredCategory === "Charity"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === "Charity") {
          output.push(input[i]);
        }
      }
      return output;
    }else if (desiredCategory === "Education"){
          for (var i = 0; i < input.length; i++) {
            if (input[i].category === "Education") {
              output.push(input[i]);
            }
          }
          return output;
      }else if (desiredCategory === "Ideas"){
          for (var i = 0; i < input.length; i++) {
            if (input[i].category === "Ideas") {
              output.push(input[i]);
            }
          }
          return output;
      }else {
        return input;
    }
  }
}
