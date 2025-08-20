<%*
const file = await tp.file.find_tfile(`deletemehost`);
const cache = app.metadataCache.getFileCache(file);
const hostname = cache.frontmatter.hostname;
const ipaddr = cache.frontmatter.ipaddr;
%>

# Host:  <% hostname %>
# IPADDR: <% ipaddr %>

%% Landmark <% c="" %>%%

## Notes:


