import { newE2EPage } from '@stencil/core/testing';

describe('cv2-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cv2-ambulance-wl-editor></cv2-ambulance-wl-editor>');

    const element = await page.find('cv2-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
