import webIcon from '../assets/images/cloudy.png';

// Adds a img icon to the browser tab
export function addTabIcon() {
    const head = document.querySelector('head');
    const icon = document.createElement('link');
    icon.rel = 'icon';
    icon.href = webIcon;
    head.appendChild(icon);
}