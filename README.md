# Electron-Vue-Python-Stack
Application cross-platform using Electron + Vue as GUI and Python with flask as Backend

## Prerequiresites:
- Python v3.7^
- Pip
- Node

## Install Steps:
1. Download the repository.
```
git clone https://github.com/benjamin-bprod/Electron-Vue-Python-Stack.git
```
2. Go to the new directory and install dependencies
```
cd Electron-Vue-Python-Stack
npm install
python -m venv env
```
3. Active python virtual env
    - On windows: ```source env/Scripts/activate```
    - On Linux: ```source env/bin/activate```

4. Install python librairies
```
pip install -r requirements.txt
```

5. Build Python API
```
pyinstaller api/server.py
```

6. Build gui and lauch electron app
```
npm run build
npm run start
```