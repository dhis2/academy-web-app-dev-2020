# DHIS2 API Overview

## Useful Links

- [DHIS2 API documentation](https://docs.dhis2.org/2.34/en/dhis2_developer_manual/web-api.html)
- [REST API Query Viewer](https://s3-eu-west-1.amazonaws.com/content.dhis2.org/general/query-viewer.html)
- [Data Query Playground](https://runtime.dhis2.nu/playground)

## Examples

Analytics Query (URL parameters)

```
https://academy.demos.dhis2.org/app-dev-academy/api/32/analytics.json?dimension=dx:hCVSHjcml9g;fbfJHSPpUQD;cYeuwXTCPkU;yTHydhurQQU;rbkr8PL0rwM;ybzlGLjWwnK&dimension=fMZEcRHuamy:qkPbeWaFsnU;wbrDrL2aYEc&dimension=pe:LAST_12_MONTHS&dimension=J5jldMd8OHv:uYxK4wmcPqA;tDZVQ1WtwpA;EYbopBOJWsW;RXL3lPSK8oG;CXw2yu5fodb&filter=ou:ImspTQPwCqd&displayProperty=SHORTNAME
```

Pretty-printed:

```
https://academy.demos.dhis2.org/app-dev-academy/api/32/analytics.json
?dimension=dx:hCVSHjcml9g;fbfJHSPpUQD;cYeuwXTCPkU;yTHydhurQQU;rbkr8PL0rwM;ybzlGLjWwnK
&dimension=fMZEcRHuamy:qkPbeWaFsnU;wbrDrL2aYEc
&dimension=pe:LAST_12_MONTHS
&dimension=J5jldMd8OHv:uYxK4wmcPqA;tDZVQ1WtwpA;EYbopBOJWsW;RXL3lPSK8oG;CXw2yu5fodb
&filter=ou:ImspTQPwCqd
&displayProperty=SHORTNAME
```

Data Query (same result)

```json
{
  "result": {
    "resource": "analytics",
    "params": {
        "dimension": [
            "dx:hCVSHjcml9g;fbfJHSPpUQD;cYeuwXTCPkU;yTHydhurQQU;rbkr8PL0rwM;ybzlGLjWwnK",
            "fMZEcRHuamy:qkPbeWaFsnU;wbrDrL2aYEc",
            "pe:LAST_12_MONTHS",
            "J5jldMd8OHv:uYxK4wmcPqA;tDZVQ1WtwpA;EYbopBOJWsW;RXL3lPSK8oG;CXw2yu5fodb"
        ],
        "filter": "ou:ImspTQPwCqd",
        "displayProperty": "SHORTNAME"
    }
  }
}
```
