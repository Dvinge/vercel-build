import { JWT } from 'next-auth/jwt';

interface Token extends JWT {
  refreshToken?: string;
}

export const refreshAccessToken = async (token: Token) => {
  try {
    const url =
      `https://${process.env.AZURE_AD_B2C_TENANT_NAME}.b2clogin.com/${process.env.AZURE_AD_B2C_TENANT_NAME}.onmicrosoft.com/${process.env.AZURE_AD_B2C_PRIMARY_USER_FLOW}/oauth2/v2.0/token?` +
      new URLSearchParams({
        client_id: process.env.AZURE_AD_B2C_CLIENT_ID ?? '',
        client_secret: process.env.AZURE_AD_B2C_CLIENT_SECRET ?? '',
        grant_type: 'refresh_token',
        scope: process.env.AZURE_AD_B2C_SCOPE ?? '',
        refresh_token: token.refreshToken ?? '',
      });

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    return {
      ...token,
      accessToken: refreshedTokens.access_token,
      accessTokenExpires: Date.now() + refreshedTokens.expires_in * 1000,
      refreshToken: refreshedTokens.refresh_token ?? token.refreshToken, // Fall back to old refresh token
    };
  } catch (error) {
    return {
      ...token,
      error: 'RefreshAccessTokenError',
    };
  }
};
