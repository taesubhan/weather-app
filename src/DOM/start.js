import {populateLocationSearch} from './location-input.js';
import {setBackground} from './page-control.js';
import {addTabIcon} from './tab-icon.js';

// Starts the webpage
export function start() {
    addTabIcon();
    setBackground();
    populateLocationSearch();
}


