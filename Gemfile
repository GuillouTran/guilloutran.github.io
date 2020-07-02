source "https://rubygems.org"
gem "jekyll", "~> 4.1.0"
# gem "github-pages", group: :jekyll_plugins
gem 'rdiscount'

group :jekyll_plugins do
  gem 'jekyll-algolia', '~> 1.0'
end
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem 'jekyll-admin'
  gem 'jekyll-analytics'

end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
  gem 'jekyll-watch'

end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :install_if => Gem.win_platform?

