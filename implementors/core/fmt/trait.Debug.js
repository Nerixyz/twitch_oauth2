(function() {var implementors = {};
implementors["twitch_oauth2"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"twitch_oauth2/client/enum.SurfError.html\" title=\"enum twitch_oauth2::client::SurfError\">Error</a>","synthetic":false,"types":["twitch_oauth2::client::surf_client::Error"]},{"text":"impl&lt;EF:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>, TT:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"twitch_oauth2/id/struct.TwitchTokenResponse.html\" title=\"struct twitch_oauth2::id::TwitchTokenResponse\">TwitchTokenResponse</a>&lt;EF, TT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TT: TokenType,<br>&nbsp;&nbsp;&nbsp;&nbsp;EF: ExtraTokenFields,&nbsp;</span>","synthetic":false,"types":["twitch_oauth2::id::TwitchTokenResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"twitch_oauth2/id/struct.TwitchTokenErrorResponse.html\" title=\"struct twitch_oauth2::id::TwitchTokenErrorResponse\">TwitchTokenErrorResponse</a>","synthetic":false,"types":["twitch_oauth2::id::TwitchTokenErrorResponse"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"twitch_oauth2/enum.Scope.html\" title=\"enum twitch_oauth2::Scope\">Scope</a>","synthetic":false,"types":["twitch_oauth2::scopes::Scope"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"twitch_oauth2/tokens/struct.AppAccessToken.html\" title=\"struct twitch_oauth2::tokens::AppAccessToken\">AppAccessToken</a>","synthetic":false,"types":["twitch_oauth2::tokens::app_access_token::AppAccessToken"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.TokenError.html\" title=\"enum twitch_oauth2::tokens::errors::TokenError\">TokenError</a>&lt;RE&gt;","synthetic":false,"types":["twitch_oauth2::tokens::errors::TokenError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.ValidationError.html\" title=\"enum twitch_oauth2::tokens::errors::ValidationError\">ValidationError</a>&lt;RE&gt;","synthetic":false,"types":["twitch_oauth2::tokens::errors::ValidationError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.RevokeTokenError.html\" title=\"enum twitch_oauth2::tokens::errors::RevokeTokenError\">RevokeTokenError</a>&lt;RE&gt;","synthetic":false,"types":["twitch_oauth2::tokens::errors::RevokeTokenError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.RefreshTokenError.html\" title=\"enum twitch_oauth2::tokens::errors::RefreshTokenError\">RefreshTokenError</a>&lt;RE&gt;","synthetic":false,"types":["twitch_oauth2::tokens::errors::RefreshTokenError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.UserTokenExchangeError.html\" title=\"enum twitch_oauth2::tokens::errors::UserTokenExchangeError\">UserTokenExchangeError</a>&lt;RE&gt;","synthetic":false,"types":["twitch_oauth2::tokens::errors::UserTokenExchangeError"]},{"text":"impl&lt;RE:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/error/trait.Error.html\" title=\"trait std::error::Error\">Error</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> + 'static&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/errors/enum.ImplicitUserTokenExchangeError.html\" title=\"enum twitch_oauth2::tokens::errors::ImplicitUserTokenExchangeError\">ImplicitUserTokenExchangeError</a>&lt;RE&gt;","synthetic":false,"types":["twitch_oauth2::tokens::errors::ImplicitUserTokenExchangeError"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"twitch_oauth2/tokens/struct.UserToken.html\" title=\"struct twitch_oauth2::tokens::UserToken\">UserToken</a>","synthetic":false,"types":["twitch_oauth2::tokens::user_token::UserToken"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"enum\" href=\"twitch_oauth2/tokens/enum.BearerTokenType.html\" title=\"enum twitch_oauth2::tokens::BearerTokenType\">BearerTokenType</a>","synthetic":false,"types":["twitch_oauth2::tokens::BearerTokenType"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"twitch_oauth2/struct.ValidatedToken.html\" title=\"struct twitch_oauth2::ValidatedToken\">ValidatedToken</a>","synthetic":false,"types":["twitch_oauth2::tokens::ValidatedToken"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()