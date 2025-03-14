import { newSpecPage } from '@stencil/core/testing';
import { Cv2AmbulanceWlEditor } from '../cv2-ambulance-wl-editor';

describe('cv2-ambulance-wl-editor', () => {
  it('buttons shall be of different type', async () => {
    const page = await newSpecPage({
      components: [Cv2AmbulanceWlEditor],
      html: `<cv2-ambulance-wl-editor entry-id="@new"></cv2-ambulance-wl-editor>`,
    });
    let items: any = await page.root.shadowRoot.querySelectorAll("md-filled-button");
    expect(items.length).toEqual(1);
    items = await page.root.shadowRoot.querySelectorAll("md-outlined-button");
    expect(items.length).toEqual(1);

    items = await page.root.shadowRoot.querySelectorAll("md-filled-tonal-button");
    expect(items.length).toEqual(1);
  });
});