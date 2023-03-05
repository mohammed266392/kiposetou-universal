import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  elementEstDansHeaderMenu(event : MouseEvent) : boolean {
    const path = event.composedPath();
    const classList = path.map((element: EventTarget) => {
      if (element instanceof HTMLElement) {
        return element.className.split(' ');
      } else {
        return [];
      }
    }) as Array<Array<string>>;
    const allClasses = classList.flat();
    return allClasses.includes('header_menu');
  }

}
