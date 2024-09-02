>  getPostBlocks.js
 
![image](getPostBlocks.png)

```
    // 如果是图片，需要添加前缀 pekaboo 通过接口推的图片
    if (
      b?.value?.type === 'image' &&
      b?.value?.properties?.source?.[0][0] && 
      b?.value?.format===undefined 
      // &&b?.value?.properties?.source?.[0][0].indexOf('ahhhhfs.com') > 0
    ) {
      const oldUrl = b?.value?.properties?.source?.[0][0]
      const newUrl = `https://notion.site/image/${encodeURIComponent(oldUrl)}?table=block&id=${b?.value?.id}`
      b.value.properties.source[0][0] = newUrl
    }
    ```

> getPageProperties.js

![image](getPageProperties.png)

``` java
  // 如果是图片，需要添加前缀 pekaboo 通过接口推的封面图片
  let pageCover = value?.format?.page_cover
  if(value?.format?.copied_from_pointer===undefined )
    pageCover = pageCover?`https://notion.site/image/${encodeURIComponent(pageCover)}`:''
```