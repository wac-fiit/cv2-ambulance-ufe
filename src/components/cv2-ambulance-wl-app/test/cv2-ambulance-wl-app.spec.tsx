import { newSpecPage } from '@stencil/core/testing';
import { Cv2AmbulanceWlApp } from '../cv2-ambulance-wl-app';

describe('cv2-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [Cv2AmbulanceWlApp],
      html: `<cv2-ambulance-wl-app base-path="/"></cv2-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("cv2-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [Cv2AmbulanceWlApp],
      html: `<cv2-ambulance-wl-app base-path="/ambulance-wl/"></cv2-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("cv2-ambulance-wl-list");
  });
});