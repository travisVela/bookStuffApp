
  Pod::Spec.new do |s|
    s.name = 'CordovaPluginsStatic'
    s.version = '1.2.1'
    s.summary = 'Autogenerated spec'
    s.license = 'Unknown'
    s.homepage = 'https://example.com'
    s.authors = { 'Capacitor Generator' => 'hi@example.com' }
    s.source = { :git => 'https://github.com/ionic-team/does-not-exist.git', :tag => '1.2.1' }
    s.source_files = 'sourcesstatic/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'CapacitorCordova'
    s.swift_version  = '4.0'
    s.static_framework = true
  end