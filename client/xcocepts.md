


## Activating Page
```js
  const { pathname } = useLocation();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(pathname.substring(1));
  }, [pathname]);
```

## Mapping on Sidebar Links
```js
const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },

  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
];

{navItems.map(({ text, icon }) => {
  if (!icon) {
    return (
    <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
      {text}
    </Typography>
    );
  }
  const lcText = text.toLowerCase();
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={() => {
        navigate(`/${lcText}`);
        setActive(lcText);
      }}>
  <ListItemIcon>
    {icon}
  </ListItemIcon>
  <ListItemText primary={text} />
</ListItemButton>
</ListItem>
);
})}
```