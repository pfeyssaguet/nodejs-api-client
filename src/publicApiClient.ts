import { AbstractClient } from './abstractClient'
import { WhoAmIClient } from './general'

/**
 * Public API Client class, should be the main entry point for your calls
 */
export class PublicApiClient extends AbstractClient {
  constructor() {
    super()
  }

  /**
   * @returns WhoamiClient
   */
  public getWhoamiClient(): WhoAmIClient {
    return new WhoAmIClient(this.client).setUrl(this.url).setApiKey(this.apiKey)
  }
}

export default PublicApiClient