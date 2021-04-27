(function() {var implementors = {};
implementors["twitch_oauth2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"twitch_oauth2/client/enum.SurfError.html\" title=\"enum twitch_oauth2::client::SurfError\">Error</a>","synthetic":true,"types":["twitch_oauth2::client::surf_client::Error"]},{"text":"impl&lt;EF, TT&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"twitch_oauth2/id/struct.TwitchTokenResponse.html\" title=\"struct twitch_oauth2::id::TwitchTokenResponse\">TwitchTokenResponse</a>&lt;EF, TT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;EF: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;TT: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>","synthetic":true,"types":["twitch_oauth2::id::TwitchTokenResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"twitch_oauth2/id/struct.TwitchTokenErrorResponse.html\" title=\"struct twitch_oauth2::id::TwitchTokenErrorResponse\">TwitchTokenErrorResponse</a>","synthetic":true,"types":["twitch_oauth2::id::TwitchTokenErrorResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"twitch_oauth2/enum.Scope.html\" title=\"enum twitch_oauth2::Scope\">Scope</a>","synthetic":true,"types":["twitch_oauth2::scopes::Scope"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"twitch_oauth2/tokens/struct.AppAccessToken.html\" title=\"struct twitch_oauth2::tokens::AppAccessToken\">AppAccessToken</a>","synthetic":true,"types":["twitch_oauth2::tokens::app_access_token::AppAccessToken"]},{"text":"impl&lt;RE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.TokenError.html\" title=\"enum twitch_oauth2::tokens::errors::TokenError\">TokenError</a>&lt;RE&gt;","synthetic":true,"types":["twitch_oauth2::tokens::errors::TokenError"]},{"text":"impl&lt;RE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.ValidationError.html\" title=\"enum twitch_oauth2::tokens::errors::ValidationError\">ValidationError</a>&lt;RE&gt;","synthetic":true,"types":["twitch_oauth2::tokens::errors::ValidationError"]},{"text":"impl&lt;RE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.RevokeTokenError.html\" title=\"enum twitch_oauth2::tokens::errors::RevokeTokenError\">RevokeTokenError</a>&lt;RE&gt;","synthetic":true,"types":["twitch_oauth2::tokens::errors::RevokeTokenError"]},{"text":"impl&lt;RE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.RefreshTokenError.html\" title=\"enum twitch_oauth2::tokens::errors::RefreshTokenError\">RefreshTokenError</a>&lt;RE&gt;","synthetic":true,"types":["twitch_oauth2::tokens::errors::RefreshTokenError"]},{"text":"impl&lt;RE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.UserTokenExchangeError.html\" title=\"enum twitch_oauth2::tokens::errors::UserTokenExchangeError\">UserTokenExchangeError</a>&lt;RE&gt;","synthetic":true,"types":["twitch_oauth2::tokens::errors::UserTokenExchangeError"]},{"text":"impl&lt;RE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.ImplicitUserTokenExchangeError.html\" title=\"enum twitch_oauth2::tokens::errors::ImplicitUserTokenExchangeError\">ImplicitUserTokenExchangeError</a>&lt;RE&gt;","synthetic":true,"types":["twitch_oauth2::tokens::errors::ImplicitUserTokenExchangeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"twitch_oauth2/tokens/struct.UserToken.html\" title=\"struct twitch_oauth2::tokens::UserToken\">UserToken</a>","synthetic":true,"types":["twitch_oauth2::tokens::user_token::UserToken"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"twitch_oauth2/tokens/struct.UserTokenBuilder.html\" title=\"struct twitch_oauth2::tokens::UserTokenBuilder\">UserTokenBuilder</a>","synthetic":true,"types":["twitch_oauth2::tokens::user_token::UserTokenBuilder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"twitch_oauth2/tokens/struct.ImplicitUserTokenBuilder.html\" title=\"struct twitch_oauth2::tokens::ImplicitUserTokenBuilder\">ImplicitUserTokenBuilder</a>","synthetic":true,"types":["twitch_oauth2::tokens::user_token::ImplicitUserTokenBuilder"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/enum.BearerTokenType.html\" title=\"enum twitch_oauth2::tokens::BearerTokenType\">BearerTokenType</a>","synthetic":true,"types":["twitch_oauth2::tokens::BearerTokenType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"twitch_oauth2/struct.ValidatedToken.html\" title=\"struct twitch_oauth2::ValidatedToken\">ValidatedToken</a>","synthetic":true,"types":["twitch_oauth2::tokens::ValidatedToken"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()